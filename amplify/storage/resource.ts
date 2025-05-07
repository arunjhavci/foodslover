import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'FoodsLover',
    access: (allow) => ({    
      'meals-image/*': [
        allow.authenticated.to(['read','write','delete']),
        allow.guest.to(['read', 'write', 'delete'])
      ],    
    })
  });