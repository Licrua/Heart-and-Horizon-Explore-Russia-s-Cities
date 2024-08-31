import emailjs from 'emailjs-com';
import notify from './toastifyNotify';

const onMailSend = async (values: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      'service_d1gal97',
      'template_fe3v9a7',
      values,
      'c8b0q41ZPbCdREP4-'
    );
    notify('success');
    console.log('Success:', response);
  } catch (error) {
    notify('error');
    console.log('Error:', error);
  }
};

export default onMailSend;
