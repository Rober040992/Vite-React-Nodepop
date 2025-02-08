function LoginPage() {
    return (
        <div>
            <h3>Log In</h3>
            <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="email"> Email</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="passowrd"> Password</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default LoginPage
