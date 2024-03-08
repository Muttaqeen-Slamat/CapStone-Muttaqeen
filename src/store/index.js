import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'
const capUrl = 'https://capstone-muttaqeen.onrender.com/'

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value){
      state.users = value
    },
    setUser(state, value){
      state.user = value
    },
    setProduct(state, value){
      state.product = value
    },
    setProducts(state, value){
      state.products = value
    },
  },
  actions: {
    async register(context,payload){
      try{
        let{msg}=(await axios.post(`${capUrl}users/register`,payload))
        if(msg){
          context.dispatch('setUser')
            // Swal.fire({
              // title: 'Update Successful',
              // text: 'User has been updated successfully!',
              // icon: 'success',
              // timer: 2000,
              // showConfirmButton: true
            // })
        }
      }catch(e){
        //   Swal.fire({
        //     title: 'Error',
        //     text: 'Failed to update user',
        //     icon: 'error',
        //     timer: 2000
        // })
      }
    },

    async fetchUsers(context){
      try{
        let {results}=(await axios.get(`${capUrl}users`)).data
        if(results){
          context.commit('setUsers',results)
        }
      }
      catch(e){
        Swal.fire({
          title: 'Update Successful',
          text: 'User has been updated successfully!',
          icon: 'error',
          timer: 2000,
          showConfirmButton: true
        })
    
      }
    },
    
    async fetchUser(context,payload){
      try{
        let {result}= (await axios.get(`${capUrl}users/${payload.id}`)).data
        if(result){
          context.commit('setUser',result)
        }
        else{
          Swal.fire({
            title: 'Update Successful',
            text: 'User has been updated successfully!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: true
          })
        }
      }catch(e){
        Swal.fire({
          title:'Error',
          text:'A user was not found',
          icon:'error',
          timer:2000
        })
      }
    },
    async updateUser(context, {id,data}){
      try{
        let{update}= await axios.patch(`${capUrl}users/update/${id}`,data);
        if(update){
          context.dispatch('setUser');
          Swal.fire({
            title: 'Update Successful',
            text: 'User has been updated successfully!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: true
          })
        }
    
      }catch(e){
        Swal.fire({
          title:'Error',
          text:'Failed to update user',
          icon:'error',
          timer:2000
        });
        console.error('error updating user:',e)
      }
    },
    
    async deleteUser({commit,dispatch},payload){
      try{
    await axios.delete(`${capUrl}users/delete/${payload.id}`)
    commit('setUsers');
    dispatch('fetchUsers');
    Swal.fire({
      title: 'Deletion was Successful',
      text: 'User has been removed successfully!',
      imageUrl: "https://i.postimg.cc/VkQXmqTy/dancing-duckdancing.gif",
      imageWidth: 250,
      imageHeight: 250,  
      icon: 'success',
      // timer: 2000,
      showConfirmButton: true
    })
      }
    
      catch(error){
        Swal.fire({
          title:'Error',
          text:'An error occurred when deleting a user',
          icon:'error',
          timer:2000
        })
      }
    },
    
    async login(context,payload){
    try{
      const {msg,token,result}=(await axios.post(`${capUrl}users/login`,payload)).data
      if(result){
        context.commit('setUser',{msg,result})
        cookies.set('LegitUser',{
          msg,token,result
        })
        AuthenticateUser.applyToken(token)
        Swal.fire({
          title: 'Update Successful',
          text: 'User has been updated successfully!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: true
        })
        router.push({name:'home'})
      }else{
        Swal.fire({
          title:'info',
          text:msg,
          icon:'info',
          timer:2000
        })
      }
    }catch(e){
      Swal.fire({
        title:'Error',
        text:'Failed to login',
        icon:'error',
        timer:2000
      })
    }
    },
        // Products
        async fetchProducts(context){
          try{
            let {results}=
            (await axios.get(`${capUrl}products`)).data
            if(results){
              context.commit('setProducts',results)
            }
          }
          catch(e){
            Swal.fire({
              title: 'Update Successful',
              text: 'User has been updated successfully!',
              icon: 'success',
              timer: 2000,
              showConfirmButton: true
            })
    
          }
        },
    
        async fetchProduct(context,payload){
          try{
            let {result}=(await axios.get(`${capUrl}products/${payload.id}`)).data
            if(result){
              context.commit('setProduct', result)
            }
            else{
              Swal.fire({
                  title:'Retrieving a single product',
                  text:'Product was not found',
                  icon:"info",
                  timer:2000
                })
            }
          }
          catch(e){
            Swal.fire({
              title:'Error',
              text:'A product was not found.',
              icon:'error',
              timer:2000
            })
          }
        },
    
        async addProduct(context,payload){
          try{
            let {msg}=(await axios.post(`${capUrl}products/addProduct`,payload))
            if(msg){
              context.dispatch('setProducts')
              Swal.fire({
              title: 'Update Successful',
              text: 'User has been updated successfully!',
              icon: 'success',
              timer: 2000,
              showConfirmButton: true
            })
            }
          }catch(e){
            // sweet({

          }
        },
        async deleteProduct({commit,dispatch},payload)
        {
          try{
            await axios.delete(`${capUrl}products/delete/${payload.id}`)
            commit('setProducts');
            dispatch('fetchProducts');
            Swal.fire({
              title: 'Update Successful',
              text: 'User has been updated successfully!',
              imageUrl: "https://i.postimg.cc/VkQXmqTy/dancing-duckdancing.gif",
              imageWidth: 250,
              imageHeight: 250,  
              icon: 'success',
              timer: 2000,
              showConfirmButton: true
            })
          }
          catch(error){
            Swal.fire({
              title:'Error',
              text:'An error occurred when deleteing a Product.',
              icon:"error",
              timer:2000
            })
          }
        },
        async updateProduct(context,{id,data}){
          try{
            let {update}= await axios.patch(`${capUrl}products/update/${id}`,data);
            if(update){
              context.dispatch('setProduct');
              Swal.fire({
                title: 'Update Successful',
                text: 'User has been updated successfully!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: true
              })
            }
          }catch(e){
            Swal.fire({
                title:'Error',
                text:'Failed to update product',
                icon:"error",
                timer:2000
              });
            console.error('Error updating user:',e)
          }
        }
  },
  modules: {
  }
})
