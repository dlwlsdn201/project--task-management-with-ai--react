import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import SignIn from '.';

describe('1. UI 요소 렌더링 테스트', () => {
  test('1.1 ID 입력 UI 렌더링', () => {
    render(<SignIn />);
    const linkElement = screen.getByRole('input', { name: 'userId' });
    expect(linkElement).toBeInTheDocument();
  });
  test('1.2 비밀번호 입력 UI 렌더링', () => {
    render(<SignIn />);
    const linkElement = screen.getByRole('input', { name: 'password' });
    // const linkElement = screen.getByText(/비밀번호/i);
    expect(linkElement).toBeInTheDocument();
  });
});
