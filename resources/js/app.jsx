import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import './bootstrap';

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            name,
            import.meta.glob([
                '/Modules/Customer/resources/assets/js/Pages/**/*.jsx',
                '/resources/js/Pages/**/*.jsx',
            ])
        ),
    setup({ el, App, props }) {
        return React.createElement(App, props, el);
    },
});
