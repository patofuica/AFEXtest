describe('Testing Login From Afex Website', () => {


    beforeEach(function () {
        cy.visit('https://afexconnect.com/iniciar-sesion', {});


    });

    it('T1 - El Usuario Deberia Poder Hacer Click En El Boton iniciar sesión, sin ingresar datos en los campos email & password.', () => {

        //VALIDANDO EL TEXTO "COMPLETA LOS SIGUIENTES DATOS PARA INICIAR SESIÓN"
        cy.get('.signin__p--subtitle').should("be.visible");
        //INICIAR SESION.
        cy.get('.signin-form__button').should("be.visible").click()
        //MENSAJE DE ERROR EMAIL
        cy.get('.mb-2 > .signin-form__error').should("be.visible")
        //MENSAJE DE ERROR PASSWORD
        cy.get('.mt-2 > .col-sm-12 > .signin-form__error').should("be.visible")
    });

    it('T2 - Validando Los Mensajes De Error En Los Campos Email & Password.', () => {
 
        //CLICK EN INICIAR SESION.
        cy.get('.signin-form__button').should("be.visible").click()
        //MENSAJE DE ERROR EMAIL
        cy.get('.mb-2 > .signin-form__error').should("be.visible").should('have.text','Email es requerido.')
        //MENSAJE DE ERROR PASSWORD
        cy.get('.mt-2 > .col-sm-12 > .signin-form__error').should("be.visible").should('have.text','La contraseña es requerida.')
    });

    it('T3 - Insertar Un Mail Invalido', () => {

        //INGRESANDO UN EMAIL INVALIDO.
        cy.get('.mb-2 > .signin-form__input').type('hola')
        //HAGO CLICK FUERA DEL CAMPO DE TEXTO PARA DESPLEGAR EL MENSAJE DE ERROR.
        cy.get('.pb-5 > :nth-child(2) > :nth-child(1)').click()
        //VERIFICANDO EL MENSAJE DE ERROR.
        cy.get('.signin-form__error').should("be.visible").should('have.text','Por favor ingresa un email válido.')
        //INGRESAMOS UN EMAIL CON FORMATO CORRECTO PARA VERIFICAR.
        cy.get('.mb-2 > .signin-form__input').type('{selectall}{backspace}')
        cy.get('.mb-2 > .signin-form__input').type('patofuica@gmail.com')
        //CLICK
        cy.get('.pb-5 > :nth-child(2) > :nth-child(1)').click()
    });

    it('T4 - Ingresando Un Password Correcto.', () => {

        //INGRESAMOS UN PASSWORD CORRECTO
        cy.get('.mt-2 > .col-sm-12 > .signin-form__input').type('{selectall}{backspace}')
        cy.get('.mt-2 > .col-sm-12 > .signin-form__input').type('123456')
        //INGRESAREMOS UNA CONTRASEÑA CORTA.
        cy.get('.mt-2 > .col-sm-12 > .signin-form__input').type('{selectall}{backspace}')
        cy.get('.mt-2 > .col-sm-12 > .signin-form__input').type('12')
        cy.get('.pb-5 > :nth-child(2) > :nth-child(1)').click()
        //VALIDAMOS EL MENSAJE DE ERROR Y SU TEXTO.
        cy.get('.signin-form__error').should('be.visible').should('have.text','La contraseña debe tener un mínimo de 6 caracteres.')  
    });


    it('T5 - El Usuario Podrá Hacer Click En "Olvidé mi contraseña & "Regístrate Aquí".', () => {

        //CLICK OLVIDE MI CONTRASEÑA
        cy.get('.text-left > .signin-form-link').click();
        cy.url().should('eq', 'https://afexconnect.com/restablecer-contrasena')
        //RETROCEDER A LA PAGINA DE INICIO DE SESIÓN.
        cy.go(-1);
        //CLICK EN REGISTRATE AQUI.
        cy.get('.text-right > .signin-form-link').click();
        cy.url().should('eq', 'https://afexconnect.com/registrarse')
        //RETROCEDER
        cy.go(-1);

        


    });



});