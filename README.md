# My Commerce Front

Aplicación de ecommerce desarrollada con **React** y **TypeScript**. Permite visualizar productos, filtrarlos por categorías, paginar resultados, ver detalles, agregarlos al carrito y realizar compras a través de Stripe.

## Características

- Mostrar listado de productos desde la API de [DummyJSON](https://dummyjson.com/docs/products).
- Filtro por categorías.
- Paginación de productos.
- Vista detallada de cada producto.
- Carrito de compras:
  - Agregar y eliminar productos.
  - Aumentar o disminuir cantidad.
  - Ver el total de la compra.
- Finalizar compra con pasarela de pago Stripe.
- Diseño responsivo y moderno con TailwindCSS y Radix UI.
- Animaciones suaves usando `tw-animate-css`.

## Tecnologías y Librerías

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/en/main)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Lucide Icons](https://lucide.dev/)
- [Next Themes](https://github.com/pacocoursey/next-themes)
- [Sonner (Toasts)](https://sonner.emilkowal.io/)
- [class-variance-authority](https://cva.style/docs)
- [clsx](https://github.com/lukeed/clsx)
- [tailwind-merge](https://tailwind-merge.vercel.app/)
- [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)

## API de Productos

Los datos se obtienen de la API pública:  
👉 [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)

## Pasarela de Pago

Se utiliza Stripe Checkout mediante una API desarrollada en ExpressJS.  
Repositorio del backend:  
👉 [https://github.com/lugolord/my-commerce-server](https://github.com/lugolord/my-commerce-server)

## Autor

**Luis González**

---

¡Gracias por visitar este proyecto! 🚀
