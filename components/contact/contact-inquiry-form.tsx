'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Locale } from '@/lib/language-routes';
import { useId, type FormEvent } from 'react';

type ContactFormCopy = {
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  problemLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypes: Array<{ value: string; label: string }>;
  submitLabel: string;
  noticeTitle: string;
  noticeBody: string;
};

const copyByLocale: Record<Locale, ContactFormCopy> = {
  en: {
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
      { value: 'iot-integration', label: 'IoT / Integration' },
      { value: 'not-sure', label: 'Not Sure Yet' },
    ],
    submitLabel: 'Discuss My Project',
    noticeTitle: 'Online submission is not available yet',
    noticeBody:
      'You can prepare your details here, but messages cannot be sent through this form until a secure submission channel is connected.',
  },
  id: {
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
      { value: 'iot-integration', label: 'IoT / Integration' },
      { value: 'not-sure', label: 'Belum Yakin' },
    ],
    submitLabel: 'Konsultasikan Proyek',
    noticeTitle: 'Pengiriman online belum tersedia',
    noticeBody:
      'Anda dapat menyiapkan detail di sini, tetapi pesan belum dapat dikirim melalui formulir ini sampai saluran pengiriman yang aman tersedia.',
  },
};

export function ContactInquiryForm({ locale }: { locale: Locale }) {
  const copy = copyByLocale[locale];
  const formId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const fieldClass =
    'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <div className='mt-10 max-w-xl'>
      <div
        role='status'
        className='mb-6 rounded-lg border border-border/70 bg-muted/30 px-4 py-3 text-sm text-muted-foreground'
      >
        <p className='font-medium text-foreground'>{copy.noticeTitle}</p>
        <p className='mt-1'>{copy.noticeBody}</p>
      </div>

      <form
        className='space-y-5'
        onSubmit={handleSubmit}
        noValidate
        aria-describedby={`${formId}-notice`}
      >
        <p id={`${formId}-notice`} className='sr-only'>
          {copy.noticeTitle}. {copy.noticeBody}
        </p>

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
            className={fieldClass}
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
            className={fieldClass}
          >
            <option value='' disabled>
              {copy.projectTypePlaceholder}
            </option>
            {copy.projectTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <Button type='submit' size='lg' className='rounded-full' disabled>
          {copy.submitLabel}
        </Button>
      </form>
    </div>
  );
}
