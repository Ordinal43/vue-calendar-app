<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        nav
        dense
      >
        <template
          v-for="(menu, index) in navMenus"
        >
          <v-list-item
            v-if="!menu.submenus"
            :key="`nav-${menu.title}-${index}`"
            v-model="menu.active"
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title
              class="font-weight-bold text-uppercase"
            >
              {{ menu.title }}
            </v-list-item-title>
          </v-list-item>
          <v-list-group
            v-else
            :key="`nav-${menu.title}-${index}`"
            v-model="menu.active"
            :prepend-icon="menu.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-bold text-uppercase"
                >
                  {{ menu.title }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(submenu, index1) in menu.submenus"
              :key="`subnav-${submenu}-${index1}`"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ submenu }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    navMenus: [
      {
        title: 'tasks',
        icon: 'mdi-check-circle-outline'
      },
      {
        title: 'my list',
        icon: 'mdi-check-circle-outline',
        submenus: [
          { title: 'My list' },
          { title: 'Important' }
        ]
      },
      {
        title: 'calendar',
        icon: 'mdi-calendar-blank-outline',
        submenus: [
          ['Create', 'mdi-plus-outline'],
          ['Read', 'mdi-file-outline']
        ]
      }
    ]
  })
};
</script>
