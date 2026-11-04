import { Injectable } from '@angular/core';
import { Produit } from '../Shared/models/Produit';
import { sample_produits } from '../../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit_BY_ID_URL, Produit_URL } from '../Shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(Produit_URL);
  }
  // getAllProduitsBySearch(searchterm: string) {
  //   return this.getAll().filter(
  //     (Produits) => Produits.nom.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())
  //   );
  getProduitById(produitId: string): Observable<Produit> {
    return this.http.get<Produit>(Produit_BY_ID_URL + produitId);
  }
}
