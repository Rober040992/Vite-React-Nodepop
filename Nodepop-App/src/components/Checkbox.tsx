
export interface Checkbox{
    rememberMe: boolean,
    setRememberMe: (value: boolean) => void
}
function RememberMeCheckbox( { rememberMe, setRememberMe }: Checkbox ) {
    
    return (
      <div>
        <label>
          <input 
          type="checkbox" 
          checked={rememberMe} // Recibe el estado del padre
          onChange={(event) => setRememberMe(event.target.checked)} // es aqui donde actualizo el estado (del padre)
          />
          Remember me
        </label>
      </div>
    );
  }
  
  export default RememberMeCheckbox;