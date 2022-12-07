/// <reference types="jasmine" />

import { emailValidator } from './email.validators';

describe('Email Validators', () => {
  const testedFunction = emailValidator;

  describe('VALID EMAILS', () => {
    it('owner@gmail.com', () => {
      expect(testedFunction('owner@gmail.com')).toBe(true);
    });
    it('prowly.com@gmail.com', () => {
      expect(testedFunction('prowly.com@gmail.com')).toBe(true);
    });
    it('owner@prowly.company.pl', () => {
      expect(testedFunction('owner@prowly.company.pl')).toBe(true);
    });
    it('owner@company-prowly.com', () => {
      expect(testedFunction('owner@company-prowly.com')).toBe(true);
    });
    it('owner@company.prowly.com', () => {
      expect(testedFunction('owner@company.prowly.com')).toBe(true);
    });
  });

  describe('INVALID EMAILS', () => {
    it('owner@prowly.com', () => {
      expect(testedFunction('owner@prowly.com')).toBe(false);
    });
    it('owner+tag@gmail.com', () => {
      expect(testedFunction('owner+tag@gmail.com')).toBe(false);
    });
  });
});
