
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://baamtu.com/');
  await page.getByRole('link', { name: 'Nos valeurs' }).click();
  await page.getByRole('link', { name: 'Nos produits' }).click();
  await page.locator('#fixed-header').getByRole('link', { name: 'Contact' }).click();
  await page.getByPlaceholder('Nom').click();
  await page.getByPlaceholder('Nom').fill('Test');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('tests@gmail.com');
  await page.getByPlaceholder('Objet').click();
  await page.getByPlaceholder('Objet').fill('test');
  await page.getByPlaceholder('Message').click();
  await page.getByPlaceholder('Message').fill('just to check');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByRole('button', { name: 'Envoyer' }).click();
});