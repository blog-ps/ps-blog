import { useEffect, useState } from 'react';
import { toast } from './use-toast';

function useGenerateFileInput(avatarRef) {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.multiple = false;

  const [readerToUpload, setReaderToUpload] = useState(() => new FormData());

  useEffect(() => {
    const readerToShow = new FileReader();

    const listener = fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      readerToShow.readAsDataURL(file);
      appendToFormData('imgFile', file);

      readerToShow.onload = async (e) => {
        const img = e.target.result;
        avatarRef.current.src = img;
        toast({
          description: '头像需点击保存后才能生效',
        });
      };
    });

    return () => {
      fileInput.removeEventListener('change', listener);
    };
  }, [avatarRef, fileInput]);

  function appendToFormData(key, value) {
    setReaderToUpload((prev) => {
      prev.append(key, value);
      return prev;
    });
  }

  function clearFormData() {
    setReaderToUpload(() => new FormData());
  }

  function removeFormData(key) {
    if (!readerToUpload.has(key)) return;

    setReaderToUpload((prev) => {
      prev.delete(key);
      return prev;
    });
  }

  function getFormData() {
    return readerToUpload;
  }

  function setFormData(key, value) {
    setReaderToUpload((prev) => {
      prev.set(key, value);
      return prev;
    });
  }

  async function run(uploadFunc) {
    if (Array.from(readerToUpload.entries()).length === 0) return;

    await uploadFunc(readerToUpload);
  }

  return {
    fileInput,
    appendToFormData,
    run,
    clearFormData,
    removeFormData,
    getFormData,
    setFormData,
  };
}

export default useGenerateFileInput;
