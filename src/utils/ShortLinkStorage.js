import AsyncStorage from "@react-native-async-storage/async-storage"
import ShortLinkKey from '../config/ShortLinkKeyStorage';
export default {

  /**
   * 
   * @returns {Array} links
   */
  async getLinksSave(){

    const myLinks = await AsyncStorage.getItem(ShortLinkKey);

    const linksSaved = JSON.parse(myLinks) || [];

    console.log('Recuperando os Links',linksSaved)
    return linksSaved;

  },

  /**
   * 
   * @param {Object} newLink 
   */

  async saveLink(newLink){
    const linksSaved = await this.getLinksSave();

    
    const hasLink = linksSaved.some(link => link.id === newLink.id);

    if(hasLink){
      throw new Error('O link já existe!');
    }

    linksSaved.push(newLink);
    
    await AsyncStorage.setItem(ShortLinkKey,JSON.stringify(linksSaved));

    console.log('Salvando Link', linksSaved);
    

  },

  async deleteLink(links, id){

    const newLinksArray = links.filter(link => link.id !== id);

    await AsyncStorage.setItem(ShortLinkKey,JSON.stringify(newLinksArray));

    console.log('Link deletado!', newLinksArray);

    return newLinksArray;

    
    
  }


}