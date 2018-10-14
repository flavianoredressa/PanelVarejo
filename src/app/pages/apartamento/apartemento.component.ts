import { Apartamento } from './../../models/apartamento';
import { Component, OnInit } from '@angular/core';
import { ApartmentServiceService } from '../../services/apartment-service.service';
import { ActivatedRoute } from '@angular/router';
import { Util } from '../../utils/util';
import { ChamadoServiceService } from '../../services/chamado-service.service';
import { Chamado } from '../../models/chamado';

@Component({
  selector: 'app-apartemento',
  templateUrl: './apartemento.component.html',
  styleUrls: ['./apartemento.component.css']
})
export class ApartementoComponent implements OnInit {
  getClasApStatus = Util.getClasApStatus;
  showApStatus = Util.showApStatus;
  ap: Apartamento;
  chamadoAtual: Chamado;
  showChamadoStatus = Util.showChamadoStatus;
  showChamadosTipos = Util.showChamadosTipos;
  chamados:Chamado[];
  constructor(private apService: ApartmentServiceService, private route: ActivatedRoute, private ChamadoService: ChamadoServiceService) { }
  ngOnInit() {
    this.ap = {
      status: 0
    }
    let id = this.route.snapshot.queryParams['id'] || '';
    if (id) {
      this.apService.get(id).subscribe(ap => {
        this.ap = ap;
        this.ChamadoService.getByAp(ap.numero).subscribe(chamados => {
          this.chamados = chamados; 
          this.chamadoAbert(chamados);
          console.log(this.chamados)
        })
      })
    }
  }
  chamadoAbert(chamados: Chamado[]) {
    this.chamadoAtual = chamados.find(c => c.status == "1");
    console.log(this.chamadoAtual)
  }
  VerificarPorcentagem(tarefas){
    var total = tarefas.length
    var tarefaFeita = 0
    tarefas.forEach(element => {
      if(element.feito)
      tarefaFeita++
    });
    return tarefaFeita/total*100
  }
}
