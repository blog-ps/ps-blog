import desc from '@/assets/svg/logo/desc.svg';
import email from '@/assets/svg/logo/email.svg';
import userLoading from '@/assets/svg/logo/user-loading.svg';
import userIcon from '@/assets/svg/user.svg';
import InputWithIcon from '@/components/InputWithIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useUploadSettings from '@/hooks/useUploadSettings';
import useUserStore from '@/store/user';
import { useRef, useState } from 'react';
import { AvatarGroup, Buttons, Settings, Wrapper } from './Form.styled';

const Form = () => {
  const avatarRef = useRef(null);
  const { LogOut, user, updateUserSettings } = useUserStore();
  const [userInfo, setUserInfo] = useState(() => user);
  const { fileInput, run, setFormData } = useUploadSettings(avatarRef, user);

  const changeAvatar = () => {
    fileInput.click();
  };

  const saveSettings = (formData) => {
    updateUserSettings(formData);
  };
  return (
    <Wrapper>
      <p>Edit Profile</p>
      <h1>Manage your DesignCode profile and account</h1>

      <AvatarGroup>
        <Avatar className="avator-img">
          <AvatarImage
            ref={avatarRef}
            src={
              userInfo.img
                ? `http://so2m1jkqq.hn-bkt.clouddn.com/${userInfo.img}`
                : userIcon
            }
            alt="avatar"
          />
          <AvatarFallback>
            <Avatar className="avator-img">
              <AvatarImage src={userLoading} alt="loading" />
            </Avatar>
          </AvatarFallback>
        </Avatar>
        <button type="file" className="change" onClick={changeAvatar}>
          Change avatar
        </button>
      </AvatarGroup>

      <Settings>
        <div className="profile">
          <h1>Profile</h1>
          <InputWithIcon
            type="text"
            src={email}
            value={userInfo.email}
            disabled={true}
          />
          <InputWithIcon
            type="text"
            value={userInfo.nickName}
            onChange={(e) =>
              setUserInfo((prev) => {
                const newInfo = { ...prev, nickName: e.target.value };
                setFormData('user', JSON.stringify(newInfo));
                return newInfo;
              })
            }
            src={userIcon}
            alt="nickName"
          />
          <InputWithIcon
            inputType="textarea"
            value={userInfo.description || ''}
            onChange={(e) =>
              setUserInfo((prev) => {
                const newInfo = { ...prev, description: e.target.value };
                setFormData('user', JSON.stringify(newInfo));
                return newInfo;
              })
            }
            src={desc}
          />
          <Buttons>
            <button onClick={() => run(saveSettings)}>Save settings</button>
            <button className="logout" onClick={LogOut}>
              Log out
            </button>
          </Buttons>
        </div>
      </Settings>
    </Wrapper>
  );
};

export default Form;
