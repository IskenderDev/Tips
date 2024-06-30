import { atom } from 'jotai';
import { FormData } from './types/IFormData'; 
export const formDataAtom = atom<FormData>({
  businessName: '',
  name: '',
  email: '',
  password: '',
});
