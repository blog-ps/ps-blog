import { useState } from 'react';
import { Content, Form, Wrapper } from './LogForm.styled';
import Login from './Login';
import SignUp from './SignUp';

const createInputField = (
  type,
  placeholder,
  value,
  onChangeHandler,
  className
) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChangeHandler(e.target.value)}
    className={className}
  />
);

const LogForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Wrapper>
      <Content>
        <div className="card" />
        <Form>
          <h1>{isSignUp ? 'Sign up' : 'Log in'}</h1>
          <p>Access to 80+ hours of courses, tutorials and source files</p>

          {isSignUp ? (
            <SignUp
              createInputField={createInputField}
              setIsSignUp={setIsSignUp}
            />
          ) : (
            <Login createInputField={createInputField} />
          )}

          <h2>
            By clicking on Sign up, you agree to our Terms of service and
            Privacy policy.
          </h2>
          <div className="divider" />
          <div className="footer">
            <h1>
              {isSignUp ? 'Already have an account?' : "Don't have any count?"}{' '}
              <a onClick={() => setIsSignUp(!isSignUp)}>
                {!isSignUp ? 'Sign up' : 'Log in'}
              </a>
            </h1>
            <h1>
              Forgot password? <a>Reset password</a>
            </h1>
          </div>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default LogForm;
