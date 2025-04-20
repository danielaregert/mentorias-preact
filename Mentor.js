import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

const Mentor = ({ nombre, edad, imagen, descripcion }) => {
    console.log(html);
  return html`
  <div class='col-lg-6'>
    <div class="card border rounded px-0">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${imagen}" class="rounded-start" alt="Imagen de ${nombre}" style='height: 210px; object-position: top;object-fit: cover;width: 100%;' />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${nombre}, ${edad}</h5>
            <p class="card-text">${descripcion}</p>
            <p class="card-text"><small class="text-body-secondary">Servicios</small></p>
          </div>
        </div>
      </div>
    </div>
    </div>`;
};

export default Mentor;