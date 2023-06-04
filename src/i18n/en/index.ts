import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
    globals: {
        placeholders: {
            email: 'Email',
            password: 'Password',
            enter_password: 'Enter Password',
            confirm_password: 'Confirm Password',
            your_name: 'Your name',
            your_email: 'Your email',
            your_password: 'Your password',
            your_code: 'Your code',
            first_appwrite_project: 'First Appwrite Project'
        },
        update: 'Update',
        recover: 'Recover',
        accept: 'Accept',
        cancel: 'Cancel'
    },
    login: {
        title: 'Sign in',
        field_inputs: {
            email: 'Email',
            password: 'Password'
        }
    },
    sign_up: {
        title: 'Sign up',
        field_inputs: {
            name: 'Name',
            email: 'Email',
            password: 'Password',
            code: 'code'
        },
        already_registered: 'Already got an account?'
    },
    password_recovery: {
        title: 'Password Recovery',
        forgot_password: 'Forgot Password',
        field_inputs: {
            email: 'Email',
            new_password: 'New password',
            cnf_password: 'Confirm password'
        }
    },
    accept_invite: {
        title: 'Accept invite',
        invalid_invite: 'Invalid invite',
        invite: 'Invite',
        sign_up: 'Sign up to Appwrite',
        warning_alert: {
            title: 'The invite link is not valid',
            sub_title: 'Please ask the project owner to send you a new invite.'
        },
        success_alert: {
            title: 'You have been invited to join a team project on Appwrite'
        }
    },
    privacy_and_policy: {
        main_text: 'By accepting the invitation, you agree to the',
        terms_and_condition: 'Terms and Conditions',
        and: 'and',
        privacy_policy: 'Privacy and Policy'
    },
    console: {
        onboarding: {
            header: 'Onboarding',
            title: "Let's create your first project"
        },
        basic_keywords: {
            project: 'Project',
            project_name: 'Project name',
            project_id: 'Project ID',
            create_project: 'Create Project'
        }
    }
};

export default en;
