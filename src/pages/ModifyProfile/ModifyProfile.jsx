import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';

export default function ModifyProfile() {
  return (
    <div>
      <TopMenuBar saveButton={true} />
      <ProfileForm isButton={false} />
    </div>
  );
}
