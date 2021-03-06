/* @flow */
import { defineMessages } from 'react-intl';
import type { Messages } from 'flowtype';

const definedMessages: Messages = defineMessages({
    TR_CHANGE_WALLET_TYPE: {
        id: 'TR_CHANGE_WALLET_TYPE',
        defaultMessage: 'Change wallet type',
    },
    TR_CHANGE_PASSPHRASE: {
        id: 'TR_CHANGE_PASSPHRASE',
        defaultMessage: 'Change passphrase',
    },
    TR_RENEW_SESSION: {
        id: 'TR_RENEW_SESSION',
        defaultMessage: 'Renew session',
        description: 'TODO',
    },
});

export default definedMessages;
