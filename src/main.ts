import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { isDevMode } from '@angular/core';;
import { appConfig } from './app/app.config';


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ngsw-worker.js').then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    }).catch((error) => {
      console.error('Error en el registro del Service Worker:', error);
    });
  });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Error al inicializar la aplicación:', err));
