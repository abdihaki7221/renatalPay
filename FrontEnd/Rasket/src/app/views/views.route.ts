import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices/invoices.component';
import { InvoiceDetailsComponent } from './invoices/invoice-details/invoice-details.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ViewTransactionsComponent } from './transactions/view-transactions/view-transactions.component';
import { AdminsComponent } from './users/admins/admins.component';
import { OwnersComponent } from './users/owners/owners.component';
import { PropertyManagersComponent } from './users/property-managers/property-managers.component';
import { TenantsComponent } from './users/tenants/tenants.component';

export const VIEW_ROUTES: Route[] = [
  {
    path: 'index',
    component: DashboardComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'apps',
    loadChildren: () =>
      import('./apps/apps.route').then((mod) => mod.APPS_ROUTES),
  },
  {
    path: 'transactions/view',
    component: ViewTransactionsComponent,
    data: { title: 'View Transactions' }, // Optional: Add a title or any other data
  },
  {
    path: 'users/admins',
    component: AdminsComponent,
    data: { title: 'Admin Users' }, // Optional: Add a title or any other data
  },
  {
    path: 'users/owners',
    component: OwnersComponent,
    data: { title: 'Property Owners' }, // Optional: Add a title or any other data
  },
  {
    path: 'users/property-managers',
    component: PropertyManagersComponent,
    data: { title: 'Property Managers' }, // Optional: Add a title or any other data
  },
  {
    path: 'users/tenants',
    component: TenantsComponent,
    data: { title: 'Tenants' }, // Optional: Add a title or any other data
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./apps/calendar/calendar.route').then((mod) => mod.CALENDAR_ROUTES),
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    data: { title: 'Invoices' },
  },
  {
    path: 'invoice/:id',
    component: InvoiceDetailsComponent,
    data: { title: 'Invoice Details' },
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  },
  {
    path: 'widgets',
    component: WidgetsComponent,
    data: { title: 'Widgets' },
  },

  {
    path: 'ui',
    loadChildren: () =>
      import('./ui/ui.route').then((mod) => mod.UI_ROUTES),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./advance-ui/advance-ui.route').then((mod) => mod.ADVANCED_ROUTES),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.route').then((mod) => mod.CHART_ROUTES),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.route').then((mod) => mod.FORMS_ROUTES),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.route').then((mod) => mod.TABLES_ROUTES),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.route').then((mod) => mod.ICONS_ROUTES),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./maps/maps.route').then((mod) => mod.MAPS_ROUTES),
  },
]