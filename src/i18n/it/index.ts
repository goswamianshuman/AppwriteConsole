// import type { Translation } from '../i18n-types';

// const it: Translation = {
//     globals: {
//         placeholders: {
//             email: 'E-mail',
//             password: 'Password',
//             enter_password: 'Inserisci password',
//             confirm_password: 'Conferma password',
//             your_name: 'Il tuo nome',
//             your_email: 'La tua email',
//             your_password: 'La tua password',
//             your_code: 'Il tuo codice',
//             first_appwrite_project: 'Primo progetto Appwrite'
//         },
//         update: 'Aggiorna',
//         recover: 'Recupera',
//         accept: 'Accetta',
//         cancel: 'Annulla'
//     },
//     login: {
//         title: 'Accedi',
//         field_inputs: {
//             email: 'E-mail',
//             password: 'Password'
//         }
//     },
//     sign_up: {
//         title: 'Iscriviti',
//         field_inputs: {
//             name: 'Nome',
//             email: 'E-mail',
//             password: 'Password',
//             code: 'codice'
//         },
//         already_registered: 'Hai già un account?'
//     },
//     password_recovery: {
//         title: 'Recupero password',
//         forgot_password: 'Password dimenticata',
//         field_inputs: {
//             email: 'E-mail',
//             new_password: 'Nuova password',
//             cnf_password: 'Conferma password'
//         }
//     },
//     accept_invite: {
//         title: 'Accetta invito',
//         invalid_invite: 'Invito non valido',
//         invite: 'Invita',
//         sign_up: 'Iscriviti ad Appwrite',
//         warning_alert: {
//             title: 'Il link di invito non è valido',
//             sub_title: 'Chiedi al proprietario del progetto di inviarti un nuovo invito.'
//         },
//         success_alert: {
//             title: 'Sei stato invitato a partecipare a un progetto di gruppo su Appwrite'
//         }
//     },
//     privacy_and_policy: {
//         main_text: `Accettando l'invito, accetti il`,
//         terms_and_condition: 'Termini e condizioni',
//         and: 'e',
//         privacy_policy: 'Privacy e politica'
//     },
//     console: {
//         onboarding: {
//             header: 'Onboarding',
//             title: "Let's create your first project"
//         },
//         basic_keywords: {
//             project: 'Progetto',
//             project_name: 'Nome progetto',
//             project_id: 'ID progetto',
//             create_project: 'Crea progetto'
//         }
//     },
//     magicURL: {
//         title: 'Missing Redirect URL',
//         info: 'Your Magic URL login flow is missing a proper redirect URL. Please check the',
//         magicDoc: 'Magic URL docs',
//         subInfo: 'and send request for new session with a valid redirect URL.'
//     }
// };

// export default it;

import type { Translation } from '../i18n-types';
import itJson from './it.json';

const it: Translation = itJson;

export default it;