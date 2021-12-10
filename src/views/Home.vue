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
        <v-list-item-group
          v-model="active"
          color="primary"
        >
          <template
            v-for="(menu, index) in navMenus"
          >
            <v-list-item
              v-if="!menu.submenus"
              :key="`nav-${menu.title}-${index}`"
              :to="menu.route"
            >
              <v-list-item-icon>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-bold text-uppercase"
                >
                  {{ menu.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
              v-else
              :key="`nav-${menu.title}-${index}`"
              :prepend-icon="menu.icon"
              :group="menu.group"
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
                :to="submenu.route"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ submenu.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list-item-group>
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
  data: () => ({
    drawer: null,
    navMenus: [
      {
        title: "tasks",
        icon: "mdi-check-circle-outline",
        route: { name: "tasks" }
      },
      {
        title: "calendar",
        icon: "mdi-calendar-blank-outline",
        group: "calendar",
        submenus: [
          {
            title: "All",
            route: { name: "calendar" }
          },
          {
            title: "Birthdays",
            route: { name: "calendar", query: { filter: "birthdays" } }
          }
        ]
      }
    ]
  })
};
</script>
