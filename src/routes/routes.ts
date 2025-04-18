type AppRouteProperties = {
  label: string;
  key: string;
  path: string;
};

export const APP_ROUTES: AppRouteProperties[] = [
  {
    key: "overview",
    label: "Overview",
    path: "",
  },
  {
    key: "workspace",
    label: "Workspace",
    path: "workspace",
  },
  {
    key: "integrations",
    label: "Integrations",
    path: "integrations",
  },
  {
    key: "history",
    label: "History",
    path: "history",
  },
  {
    key: "feedback",
    label: "Feedback",
    path: "feedback",
  },
];
