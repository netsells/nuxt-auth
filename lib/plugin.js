/* eslint-disable */

/**
 * This file simply overrides the generated plugin for
 * `@nuxtjs/auth`, so that we can use runtime config variables.
 */

import Auth from './auth';
import merge from 'lodash.merge';
import './middleware';

// Active schemes
<% options.uniqueSchemes.map((path) => { %>
import scheme_<%= hash(path) %> from '<%= path.replace(/\\/g,'/') %>';
<% }); %>

export default function (ctx, inject) {
    // Options
    const options = merge(<%= JSON.stringify(options.options) %>, ctx.$config.auth);

    // Create a new Auth instance
    const $auth = new Auth(ctx, options);

    // Register strategies
    <% options.strategies.map((strategy) => { %>
    <%
        const scheme = 'scheme_' + hash(options.strategyScheme.get(strategy))
        const schemeOptions = JSON.stringify(strategy)
        const name = strategy._name
    %>
    const <%- name %>Options = merge(<%= schemeOptions %>, ctx.$config.auth?.strategies?.<%- name %>);

    // <%- name %>
    $auth.registerStrategy('<%- name %>', new <%- scheme %>($auth, <%- name %>Options));
    <% }) %>

    // Inject it to nuxt context as $auth
    inject('auth', $auth)
    ctx.$auth = $auth

    // Initialize auth
    return $auth.init().catch(error => {
        if (process.client) {
            console.error('[ERROR] [AUTH]', error)
        }
    });
}
