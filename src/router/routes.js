import NotFound from "@/components/NotFound/index.vue";

const routes = [
  {
    path: "",
    component: () => import("@/App.vue" /* webpackChunkName: "root-page" */),
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue" /* webpackChunkName: "home-page" */),
        redirect: { name: "tasks" },
        children: [
          {
            name: "tasks",
            path: "/tasks",
            component: () => import("@/views/Tasks/index.vue" /* webpackChunkName: "tasks-page" */)
          },
          {
            name: "calendar",
            path: "/calendar",
            component: () => import("@/views/Calendar/index.vue" /* webpackChunkName: "calendar-page" */)
          }
        ]
      }
    ]
  },
  {
    name: "404",
    path: "*",
    component: NotFound
  }
];

export default routes;
