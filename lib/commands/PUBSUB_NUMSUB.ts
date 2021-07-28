import { transformReplyNumber } from './generic-transformers';

export const IS_READ_ONLY = true;

export function transformArguments(channels?: Array<string> | string): Array<string> {
    const args = ['PUBSUB', 'NUMSUB'];

    if (Array.isArray(channels)) {
        args.push(...channels);
    } else if (typeof channels === 'string') {
        args.push(channels);
    }

    return args;
}

export function transformReply(rawReply: Array<string | number>): Record<string, number> {
    const transformedReply = Object.create(null);

    for (let i = 0; i < rawReply.length; i +=2) {
        transformedReply[rawReply[i]] = rawReply[i + 1];
    }

    return transformedReply;
}
