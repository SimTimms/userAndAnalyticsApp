import { IOrganisationWrite } from 'interface';

export function handleClickChange(
  setFormData: (props: IOrganisationWrite) => void,
  formData: IOrganisationWrite,
  name: string,
  value: string
) {
  let newArr = [...formData['projects']];
  //let newerArr = newArr.map((item) => item);
  const exists = newArr.findIndex((item) => item === value);
  if (exists === -1) {
    newArr.push(value);
  } else {
    newArr.splice(exists, 1);
  }
  setFormData({ ...formData, [name]: newArr });
}
