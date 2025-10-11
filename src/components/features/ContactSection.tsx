import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import styles from './ContactSection.module.css';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    alert('Dziękuję za wiadomość! (To tylko demo - formularz nie wysyła danych)');
    reset();
  };

  return (
    <motion.section 
      id="contact"
      className={styles.contact}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2>Skontaktuj się ze mną</h2>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Imię</label>
              <input 
                type="text" 
                id="name"
                className={styles.input}
                placeholder="Twoje imię"
                {...register('name', { 
                  required: 'Imię jest wymagane',
                  minLength: {
                    value: 2,
                    message: 'Imię musi mieć co najmniej 2 znaki'
                  }
                })}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email"
                className={styles.input}
                placeholder="twoj@email.com"
                {...register('email', { 
                  required: 'Email jest wymagany',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Nieprawidłowy format email'
                  }
                })}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Wiadomość</label>
              <textarea 
                id="message"
                className={styles.textarea}
                placeholder="Twoja wiadomość..."
                {...register('message', { 
                  required: 'Wiadomość jest wymagana',
                  minLength: {
                    value: 10,
                    message: 'Wiadomość musi mieć co najmniej 10 znaków'
                  }
                })}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message.message}</span>
              )}
            </div>
            
            <Button type="submit" className={styles.submitButton}>
              Wyślij wiadomość
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
