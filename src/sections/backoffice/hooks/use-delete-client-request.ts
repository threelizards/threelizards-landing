import { useTranslationClient } from '@/i18n/client';
import { frontendService } from '@/services/frontend';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useDeleteClientRequest = () => {
  const { t } = useTranslationClient('backoffice');
  const router = useRouter();
  const [deleting, setDeleting] = useState<string[]>([]);

  const deleteRequest = useCallback(
    async (id: string) => {
      if (!deleting.includes(id)) setDeleting((prev) => [...prev, id]);
      try {
        const res = await frontendService.clientRequest.deleteClientRequest(id);
        router.refresh();
        return res;
      } catch (e) {
        toast(t('delete_error'), { type: 'error' });
      }
      setDeleting((prev) => prev.filter((loadingId) => id !== loadingId));
    },
    [deleting, setDeleting, t, router]
  );

  return { deleting, deleteRequest };
};
