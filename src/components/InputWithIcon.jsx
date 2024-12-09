import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
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
  } = props;

  return (
    <Wrapper>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width, height }}
      />
      <div className="img-wrapper">
        <img src={src} alt={alt} />
      </div>
    </Wrapper>
  );
};

InputWithIcon.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  src: PropTypes.any.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
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
    left: 4px;
    top: 4px;

    padding: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  input {
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
  }
`;
