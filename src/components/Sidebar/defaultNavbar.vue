<script lang="ts">
import { defineComponent, h } from "vue";
export interface NavItem {
  label: string;
  href: string;
  icon: string; // VNode is the equivalent of React.ReactNode in Vue
}

export const defaultNavItems: NavItem[] = [
  {
    label: "Home",
    href: "#",
    icon: "/Icon_home.svg", // Using `h` function to create VNode
  },
  {
    label: "Patient Profile",
    href: "#",
    icon: "/ProfileLogo.svg",
  },
  {
    label: "Appointments",
    href: "#",
    icon: "/appointmentLogo.svg",
  },
  {
    label: "Medical History",
    href: "#",
    icon: "/Icon_history.svg",
  },
  {
    label: "Settings",
    href: "#",
    icon: "Icon_Account_setting.svg",
  },
];

export default defineComponent({
  // Vue component options...
});
</script>
