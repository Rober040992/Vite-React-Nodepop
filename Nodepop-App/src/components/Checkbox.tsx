
export interface Checkbox{
    rememberMe: boolean,
    setRememberMe: (value: boolean) => void
}
function RememberMeCheckbox( { rememberMe, setRememberMe }: Checkbox ) {
    
    return (
      <div>
        <label>
          <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
          Remember me
        </label>
      </div>
    );
  }
  
  export default RememberMeCheckbox;