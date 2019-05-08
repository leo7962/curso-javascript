$(document).ready(function() {
  //Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    pager: false,
    keyboardEnabled: false,
    randomStart: true,
    auto: true,
  });

  // Almacenamiento por post
  var posts = [{
      title: 'Prueba de titulo 1',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci auctor, volutpat sem ut, sodales dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed dapibus urna, et sodales orci. Etiam lacinia rutrum mi non vehicula. Phasellus bibendum feugiat elementum. Curabitur ultricies vehicula congue. Integer venenatis id nibh ac eleifend. Suspendisse ut elementum orci. Praesent lectus justo, viverra a turpis ac, feugiat commodo sapien. In mollis tincidunt justo, quis mattis lacus maximus sed. Suspendisse bibendum mattis rutrum. Nulla gravida tempor mauris. Suspendisse maximus libero metus, in fringilla sapien tristique nec. Duis eget leo cursus, consectetur lorem ut, porta tortor. Cras vitae fringilla purus, imperdiet vulputate magna.',
    },
    {
      title: 'Prueba de titulo 2',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci auctor, volutpat sem ut, sodales dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed dapibus urna, et sodales orci. Etiam lacinia rutrum mi non vehicula. Phasellus bibendum feugiat elementum. Curabitur ultricies vehicula congue. Integer venenatis id nibh ac eleifend. Suspendisse ut elementum orci. Praesent lectus justo, viverra a turpis ac, feugiat commodo sapien. In mollis tincidunt justo, quis mattis lacus maximus sed. Suspendisse bibendum mattis rutrum. Nulla gravida tempor mauris. Suspendisse maximus libero metus, in fringilla sapien tristique nec. Duis eget leo cursus, consectetur lorem ut, porta tortor. Cras vitae fringilla purus, imperdiet vulputate magna.',
    },
    {
      title: 'Prueba de titulo 3',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci auctor, volutpat sem ut, sodales dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed dapibus urna, et sodales orci. Etiam lacinia rutrum mi non vehicula. Phasellus bibendum feugiat elementum. Curabitur ultricies vehicula congue. Integer venenatis id nibh ac eleifend. Suspendisse ut elementum orci. Praesent lectus justo, viverra a turpis ac, feugiat commodo sapien. In mollis tincidunt justo, quis mattis lacus maximus sed. Suspendisse bibendum mattis rutrum. Nulla gravida tempor mauris. Suspendisse maximus libero metus, in fringilla sapien tristique nec. Duis eget leo cursus, consectetur lorem ut, porta tortor. Cras vitae fringilla purus, imperdiet vulputate magna.',
    },
    {
      title: 'Prueba de titulo 4',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci auctor, volutpat sem ut, sodales dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed dapibus urna, et sodales orci. Etiam lacinia rutrum mi non vehicula. Phasellus bibendum feugiat elementum. Curabitur ultricies vehicula congue. Integer venenatis id nibh ac eleifend. Suspendisse ut elementum orci. Praesent lectus justo, viverra a turpis ac, feugiat commodo sapien. In mollis tincidunt justo, quis mattis lacus maximus sed. Suspendisse bibendum mattis rutrum. Nulla gravida tempor mauris. Suspendisse maximus libero metus, in fringilla sapien tristique nec. Duis eget leo cursus, consectetur lorem ut, porta tortor. Cras vitae fringilla purus, imperdiet vulputate magna.',
    },
    {
      title: 'Prueba de titulo 5',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci auctor, volutpat sem ut, sodales dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed dapibus urna, et sodales orci. Etiam lacinia rutrum mi non vehicula. Phasellus bibendum feugiat elementum. Curabitur ultricies vehicula congue. Integer venenatis id nibh ac eleifend. Suspendisse ut elementum orci. Praesent lectus justo, viverra a turpis ac, feugiat commodo sapien. In mollis tincidunt justo, quis mattis lacus maximus sed. Suspendisse bibendum mattis rutrum. Nulla gravida tempor mauris. Suspendisse maximus libero metus, in fringilla sapien tristique nec. Duis eget leo cursus, consectetur lorem ut, porta tortor. Cras vitae fringilla purus, imperdiet vulputate magna.',
    },
  ];
    console.log(posts);
});
