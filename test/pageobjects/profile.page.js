import { $ } from '@wdio/globals'



class ProfilePage {

    async profileName (name) { 
        return await $('id:profile-name') 
    }
}

export default new class ProfilePage();
