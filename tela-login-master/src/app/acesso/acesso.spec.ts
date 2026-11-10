import { TestBed } from '@angular/core/testing';
import { Acesso } from './acesso';

describe('Acesso', () => {
  it('enables access only for allowed users and displays the welcome message', async () => {
    await TestBed.configureTestingModule({ imports: [Acesso] }).compileComponents();
    const fixture = TestBed.createComponent(Acesso);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const input = element.querySelector('input')!;
    const button = element.querySelector('button')!;

    expect(button.disabled).toBe(true);

    for (const usuario of ['root', 'admin', 'visitante']) {
      input.value = usuario;
      input.dispatchEvent(new Event('input'));
      await fixture.whenStable();
      expect(fixture.componentInstance.permissao).toBe(usuario);
      expect(button.disabled).toBe(false);
      button.click();
      await fixture.whenStable();
      expect(element.querySelector('p')?.textContent).toBe(
        `Bem vindo usuário ${usuario}, você está logado.`
      );
    }

    for (const usuario of ['', 'desconhecido', 'ROOT']) {
      input.value = usuario;
      input.dispatchEvent(new Event('input'));
      await fixture.whenStable();
      expect(button.disabled).toBe(true);
      expect(element.querySelector('p')?.textContent).toBe('');
    }
  });
});
