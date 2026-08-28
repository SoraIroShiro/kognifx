'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  getContactMailtoHref,
  getWhatsAppHandoffUrl,
} from '@/lib/contact-channels';
import type { Locale } from '@/lib/language-routes';
import { useId, type FormEvent } from 'react';

type ContactFormCopy = {
  formTitle: string;
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  problemLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypes: Array<{ value: string; label: string }>;
  submitLabel: string;
  handoffHint: string;
  emailFallbackLabel: string;
  emptyOptionalValue: string;
};

type InquiryValues = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  problem: string;
  projectType: string;
};

const copyByLocale: Record<Locale, ContactFormCopy> = {
  en: {
    formTitle: 'Project inquiry',
    nameLabel: 'Name',
    companyLabel: 'Company / Organization',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    problemLabel: 'What are you trying to solve?',
    projectTypeLabel: 'Project type (optional)',
    projectTypePlaceholder: 'Select a project type',
    projectTypes: [
      { value: 'custom-software', label: 'Custom Software' },
      { value: 'enterprise-system', label: 'Enterprise System' },
      { value: 'ai-automation', label: 'AI & Automation' },
      { value: 'web-commerce', label: 'Web / Commerce' },
      { value: 'systems-integration', label: 'Systems Integration' },
      { value: 'not-sure', label: 'Not Sure Yet' },
    ],
    submitLabel: 'Continue via WhatsApp',
    handoffHint:
      'Your inquiry will be prepared as a WhatsApp message. You can review it before sending.',
    emailFallbackLabel: 'Email Kognifx',
    emptyOptionalValue: '-',
  },
  id: {
    formTitle: 'Form konsultasi',
    nameLabel: 'Nama',
    companyLabel: 'Perusahaan / Organisasi',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    problemLabel: 'Masalah atau kebutuhan yang ingin diselesaikan',
    projectTypeLabel: 'Jenis proyek (opsional)',
    projectTypePlaceholder: 'Pilih jenis proyek',
    projectTypes: [
      { value: 'custom-software', label: 'Custom Software' },
      { value: 'enterprise-system', label: 'Sistem Enterprise' },
      { value: 'ai-automation', label: 'AI & Automation' },
      { value: 'web-commerce', label: 'Web / Commerce' },
      { value: 'systems-integration', label: 'Integrasi Sistem' },
      { value: 'not-sure', label: 'Belum Yakin' },
    ],
    submitLabel: 'Lanjutkan via WhatsApp',
    handoffHint:
      'Data konsultasi akan disiapkan sebagai pesan WhatsApp. Anda dapat memeriksanya sebelum mengirim.',
    emailFallbackLabel: 'Email Kognifx',
    emptyOptionalValue: '-',
  },
};

function buildWhatsAppMessage(
  locale: Locale,
  values: InquiryValues,
  emptyOptionalValue: string
): string {
  const company = values.company || emptyOptionalValue;
  const whatsapp = values.whatsapp || emptyOptionalValue;
  const projectType = values.projectType || emptyOptionalValue;

  if (locale === 'id') {
    return [
      'Halo Kognifx,',
      '',
      `Nama: ${values.name}`,
      `Perusahaan / Organisasi: ${company}`,
      `Email: ${values.email}`,
      `WhatsApp: ${whatsapp}`,
      `Jenis Proyek: ${projectType}`,
      '',
      'Masalah atau kebutuhan yang ingin saya selesaikan:',
      values.problem,
      '',
      'Saya ingin berkonsultasi mengenai kebutuhan ini dengan Kognifx.',
    ].join('\n');
  }

  return [
    'Hello Kognifx,',
    '',
    `Name: ${values.name}`,
    `Company / Organization: ${company}`,
    `Email: ${values.email}`,
    `WhatsApp: ${whatsapp}`,
    `Project Type: ${projectType}`,
    '',
    'What I am trying to solve:',
    values.problem,
    '',
    'I would like to discuss this requirement with Kognifx.',
  ].join('\n');
}

export function ContactInquiryForm({ locale }: { locale: Locale }) {
  const copy = copyByLocale[locale];
  const formId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const projectTypeValue = String(data.get('projectType') ?? '').trim();
    const projectTypeLabel =
      copy.projectTypes.find((option) => option.value === projectTypeValue)
        ?.label ?? '';

    const values: InquiryValues = {
      name: String(data.get('name') ?? '').trim(),
      company: String(data.get('company') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      whatsapp: String(data.get('whatsapp') ?? '').trim(),
      problem: String(data.get('problem') ?? '').trim(),
      projectType: projectTypeLabel,
    };

    const message = buildWhatsAppMessage(
      locale,
      values,
      copy.emptyOptionalValue
    );
    const destination = getWhatsAppHandoffUrl(message);

    window.open(destination, '_blank', 'noopener,noreferrer');
  };

  const fieldClass =
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50';

  const selectClass = `${fieldClass} dark:[color-scheme:dark]`;

  return (
    <form className='space-y-5' onSubmit={handleSubmit}>
      <div>
        <h2 className='text-xl font-medium tracking-tight'>{copy.formTitle}</h2>
        <p className='mt-2 text-sm text-muted-foreground'>{copy.handoffHint}</p>
      </div>
        <div className='space-y-2'>
          <Label htmlFor={`${formId}-name`}>{copy.nameLabel}</Label>
          <Input
            id={`${formId}-name`}
            name='name'
            type='text'
            autoComplete='name'
            required
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor={`${formId}-company`}>{copy.companyLabel}</Label>
          <Input
            id={`${formId}-company`}
            name='company'
            type='text'
            autoComplete='organization'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor={`${formId}-email`}>{copy.emailLabel}</Label>
          <Input
            id={`${formId}-email`}
            name='email'
            type='email'
            autoComplete='email'
            required
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor={`${formId}-whatsapp`}>{copy.whatsappLabel}</Label>
          <Input
            id={`${formId}-whatsapp`}
            name='whatsapp'
            type='tel'
            autoComplete='tel'
            inputMode='tel'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor={`${formId}-problem`}>{copy.problemLabel}</Label>
          <textarea
            id={`${formId}-problem`}
            name='problem'
            required
            rows={5}
            className={`${fieldClass} min-h-[8rem] py-2`}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor={`${formId}-project-type`}>
            {copy.projectTypeLabel}
          </Label>
          <select
            id={`${formId}-project-type`}
            name='projectType'
            defaultValue=''
            className={selectClass}
          >
            <option value='' className='bg-background text-foreground'>
              {copy.projectTypePlaceholder}
            </option>
            {copy.projectTypes.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className='bg-background text-foreground'
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
          <Button type='submit' size='lg' className='rounded-full'>
            {copy.submitLabel}
          </Button>
          <a
            href={getContactMailtoHref()}
            className='inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
          >
            {copy.emailFallbackLabel}
          </a>
        </div>
    </form>
  );
}
