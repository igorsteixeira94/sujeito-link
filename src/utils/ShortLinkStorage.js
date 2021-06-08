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
    

  },

    /**
   * 
   * @returns {Array} links
   */
  async deleteLink(links, id){

    const newLinksArray = links.filter(link => link.id !== id);

    await AsyncStorage.setItem(ShortLinkKey,JSON.stringify(newLinksArray));
    
    return newLinksArray;
 
  }


}