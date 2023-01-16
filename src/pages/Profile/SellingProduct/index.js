import React from 'react';
import styles from './myProduct.module.css';
import Nav1 from '../../../components/Nav1';
import { Link } from 'react-router-dom';


export default function SellingProduct() {
    return (
        <section className={styles.profile}>
          <Nav1 />
          <div className={styles.profile_sidebar}>
            <div className={styles.main_profile}>
              <div className={styles.profile_img}>
                <img src="" alt="" />
              </div>
              <div className={styles.name_profile}>
                <p>james mikael</p>
                <p>ubah profile</p>
              </div>
            </div>
            <div className={styles.menu_profile}>
              <div className={`${styles.circle} ${styles.blue}`}>
                <img src="" alt="" />
              </div>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Store</button>
                <div className={styles.dropdown_content}>
                  <Link to="/profile">Profile</Link>
                  <Link to="#">Store Profile</Link>
                </div>
              </div>
            </div>
            <div className={styles.menu_profile}>
              <div className={`${styles.circle} ${styles.orange}`}>
                <img src="" alt="" />
              </div>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Products</button>
                <div className={styles.dropdown_content}>
                  <Link to="/profileseler">Selling Product</Link>
                  <Link to="/myproduct">My Product</Link>
                  <Link to="/product">Product list</Link>
                </div>
              </div>
            </div>
            <div className={styles.menu_profile}>
              <div className={`${styles.circle} ${styles.pink}`}>
                <img src="" alt="" />
              </div>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Order</button>
                <div className={styles.dropdown_content}>
                  <Link to="#">My Order</Link>
                  <Link to="#">Order cancel</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Selling_product}>
            <div className={styles.main}>
              <form onSubmit="">
                <div className={styles.inventory}>
                  <h4>Inventory</h4>
                  <hr />
                  <label htmlFor="">Name of goods</label>
                  {/* <input type="text" className={styles.data} value={dataProduct.name} onChange={handleChange} /> */}
                  {/* <input type="text" className={styles.data} name="name" value={dataProduct.name} placeholder={products?.name} onChange={handleChange} /> */}
                  <input type="text"/>
                </div>
                <div className={styles.item}>
                  <h4>Item details</h4>
                  <hr />
                  <label htmlFor="">Price</label>
                  <input type="number" className={styles.data} />
                  <label htmlFor="">Stock</label>
                  <input type="number" className={styles.data} name="stock"  />
                  <label htmlFor="">id category</label>
                  <input type="number" className={styles.data} name="id_category" />
                  <label htmlFor="">Condition</label>
                  <div className={styles.radio}>
                    <div className={styles.radio_item}>
                      <input type="radio" id="ritema" name="ritem" value="ropt1" />
                      <span>Baru</span>
                    </div>
                    <div className={styles.radio_item}>
                      <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                      <span>Bekas</span>
                    </div>
                  </div>
                </div>
                <div className={styles.photo}>
                  <h4>Photo of goods</h4>
                  <hr />
                  <div className={styles.preview_image}>
                    <div className={styles.main_img}>
                      <img src="" alt="box" />
                    </div>
                    <div>
                      <img src="" alt="box" />
                    </div>
                    <div>
                      <img src="" alt="box" />
                    </div>
                    <div>
                      <img src="" alt="box" />
                    </div>
                    <div>
                      <img src="" alt="box" />
                    </div>
                  </div>
                  <div className={styles.upload_image}>
                    <input type="file" name="photo"  />
                    {/* <button type="submit">PRIMARY</button> */}
                  </div>
                </div>
                <div className={styles.decription}>
                  <h4>Description</h4>
                  <hr />
                  <label htmlFor="">Name of goods</label>
                  {/* <textarea name="description" id="" cols="30" rows="10" value={dataProduct.name}></textarea> */}
                  <textarea name="description" id="" cols="30" rows="10"  />
                </div>
                <button type="submit" className={styles.jual_btn}>
                  jual
                </button>
              </form>
            </div>
          </div>
        </section>
  )
}
