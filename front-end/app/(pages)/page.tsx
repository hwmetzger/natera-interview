import { LoginComponent } from "@/components/index";

// NextJS Convention, assigning page's metadata
export const metadata = {
  title: `Henry "Hank" Well Metzger - Interview Solution - Sign In`,
};

/**
 * This is the NextJS SSR Page for route '/'.
 * @returns Promise<React.ReactElement>
 */
export default function Page() {
  return (
    <>
      <div>
        <LoginComponent />
      </div>
    </>
  );
}
