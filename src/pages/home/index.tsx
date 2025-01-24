import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { type users } from "../../schema";
import { Button } from "@/components/shadcn-ui/button";
import { Input } from "@/components/shadcn-ui/input";
import { getErrorMessage } from "@/utils/get-error-message";

export function Home(): React.JSX.Element {
  const [usersState, setUsersState] = useState<(typeof users.$inferSelect)[]>(
    [],
  );
  const formRef = useRef<HTMLFormElement>(null);

  const updateUsers = async (): Promise<void> => {
    const users = await window.ipcRenderer.invoke("fetchUsers");
    setUsersState(users);
  };

  useEffect(function setInitialUsers() {
    void updateUsers();
  }, []);

  const handleSubmit = async (formData: FormData): Promise<void> => {
    const name = formData.get("name");
    if (!name || typeof name !== "string") return;

    try {
      const newUser = await window.ipcRenderer.invoke("saveName", name);
      setUsersState((prev) => [...prev, newUser]);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error(errorMessage);
    }
  };

  return (
    <div>
      <img alt="logo" src="vite.svg" />
      <h1>Hello, world!</h1>
      <div>
        <Link to="/about">Go to about page</Link>
      </div>
      <form ref={formRef} action={handleSubmit}>
        <Input name="name" type="text" />
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </form>
      <div>
        {usersState.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
