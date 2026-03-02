'use server';

import { draftMode } from 'next/headers';

export async function disableDraftMode() {
  const draft = await draftMode();
  draft.disable();

  // Small delay to ensure loading state is shown
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
