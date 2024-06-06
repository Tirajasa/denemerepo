describe('rotring.spec.cy.js', () => {
 beforeEach(()=>{

  cy.visit('http://localhost:5173/')

  it('passes', () => {
    cy.get('[data-cy="email"]').contains("[form.email]")
    cy.get('[data-cy="password"]')
      .type('[form.password]')
      cy.get('[data-cy="terms"]').check('[data-cy="terms-value"]')
    

    });
    })
    
  })


  Projeyi kendi bilgisayarınızda sıfırdan oluşturarak yapacaksınız. (Tercihen vite ile projenizi oluşturun)
  Uygulamanızda bir Login formu ve bir success sayfası olsun.
  login formu:
  email
  şifre
  ve şartları kabul ediyorum alanından oluşun.
  Validasyonlar ekleyin:
  geçerli email,
  password strong olsun,
  şartları kabul edilmiş olsun.
  tüm validasyonları geçer ise login butonu aktif olsun.
  Cypress ile de 2 farklı senaryoda test yazın:
  başarılı form doldurulduğunda submit edebiliyorum ve success sayfasını açabiliyorum.
  email yanlış girdim:
  ekranda 1 tane hata mesajı var
  ekranda doğru hata mesajı var
  buton disabled kontrolü yapın
  email ve password yanlış
  ekranda 2 tane hata mesajı var
  ekranda password hata mesajı var
  email ve password doğru ama kuralları kabul etmedim.
  buton disabled mı
  projeyi github’a yükleyin
  public olsun
  en az 4 commit olsun
  proje setup’ı bitince
  login sayfası ve success sayfası bitince
  form validsayonları eklenince
  testler eklenince
  



