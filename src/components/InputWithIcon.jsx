/* eslint-disable no-console */
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styled from 'styled-components';

const InputWithIcon = (props) => {
  const {
    type = 'text',
    placeholder = '',
    value,
    onChange,
    src,
    alt = `img-${nanoid()}`,
    width = '320px',
    height = '40px',
    className,
    disabled = false,
    inputType = 'input',
  } = props;

  useEffect(() => {
    if (disabled) return;

    if (value && !onChange) {
      console.error(
        'You have passed a value prop but not an onChange handler to InputWithIcon component\n Please pass an onChange handler to handle the value prop'
      );
    }

    if (value === null && onChange) {
      console.error(
        'You have passed an onChange handler but not a value prop to InputWithIcon component\n Please pass a value prop to handle the onChange handler'
      );
    }
  }, [disabled, onChange, value]);

  return (
    <Wrapper className={className} $area={inputType === 'textarea'}>
      {inputType === 'input' ? (
        <input
          className="inputs"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange || (() => {})}
          style={{ width, height }}
          disabled={disabled}
        />
      ) : (
        <textarea
          className="inputs area"
          placeholder={placeholder}
          value={value}
          onChange={onChange || (() => {})}
          style={{ width, height }}
          disabled={disabled}
        />
      )}

      <div className="img-wrapper">
        <img src={src} alt={alt} />
      </div>
    </Wrapper>
  );
};

InputWithIcon.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  src: PropTypes.any.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  inputType: PropTypes.oneOf(['input', 'textarea']),
};

export default InputWithIcon;

const Wrapper = styled.div`
  position: relative;

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .img-wrapper {
    position: absolute;
    left: ${({ $area }) => ($area ? '6px' : '4px')};
    top: ${({ $area }) => ($area ? '12px' : '4px')};

    padding: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  .area {
    min-height: 58px;
  }

  .inputs {
    display: flex;
    width: 320px;
    height: 40px;
    padding: 4px;
    padding-left: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    transition: all 0.3s ease;

    border-radius: 30px;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    background: linear-gradient(
      180deg,
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.15);

    color: #fff;
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
      outline: none;
      padding-left: 42px;
      box-shadow: rgba(47, 184, 255, 0.3) 0px 10px 40px,
        rgb(47, 184, 255) 0px 0px 0px 1px inset;
      background: linear-gradient(
        rgba(24, 32, 79, 0.4) 0%,
        rgba(24, 32, 79, 0.25) 100%
      );
      padding-left: 40px;
    }

    &:disabled {
      color: rgba(255, 255, 255, 0.4);
      cursor: not-allowed;
    }
  }
`;
