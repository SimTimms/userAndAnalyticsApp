import { UserTypes } from 'enums';
import { IUser, IUserWrite } from 'interface';
export function handleChange(
  e: any,
  setFormData: (props: IUserWrite) => void,
  formData: IUserWrite,
  nameOverride?: string
) {
  const { name, value } = e.target;
  setFormData({ ...formData, [nameOverride ? nameOverride : name]: value });
}

export function handleClickChange(
  setFormData: (props: IUserWrite) => void,
  formData: IUserWrite,
  name: string,
  value: string,
  multi?: boolean
) {
  if (multi) {
    const arrPart = formData[name as keyof IUserWrite];
    let newArr = Array.isArray(arrPart) ? [...arrPart] : [];
    const exists = newArr.findIndex((item) => item === value);
    if (exists === -1) {
      newArr.push(value);
    } else {
      newArr.splice(exists, 1);
    }
    setFormData({ ...formData, [name]: newArr });
  } else {
    setFormData({ ...formData, [name]: value });
  }
}

export function handleScopeChange(
  e: any,
  setFormData: (props: IUserWrite) => void,
  formData: IUserWrite
) {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value.split(',') });
}

export const formDataDefaults = {
  name: '',
  email: '',
  scope: UserTypes.Admin,
  organisation: '',
  _id: null,
  projects: [],
};
