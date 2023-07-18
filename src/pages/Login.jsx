export const Login = () => {
  return (
    <>
      <form>
        <label htmlFor="Email">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="Password">
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
