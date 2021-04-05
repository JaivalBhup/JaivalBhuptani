function sketch(sk){
    var particles = [];
    sk.setup = function(){
        let canvas = sk.createCanvas(window.innerWidth, window.innerHeight);
        canvas.position(0,0);
        canvas.style('z-index', '-1');
        sk.background('rgb(28,34,55)');
        for(let i = 0; i< 150; i++){
            var p = new Particle(sk.random(sk.width),sk.random(sk.height),sk.random(1,3),sk.random(-0.5,0.5),sk.random(-0.5,0.5));
            particles.push(p)
        }
        for(let p of particles){
            p.show();
        }
    }

    sk.draw = function() {
        sk.background('rgb(28,34,55)');
    particles.forEach((p, index)=>{
        p.update();
        p.connect(particles.slice(index))
    })
    // for(let p of particles){
    //   p.update();
    //   p.connect(particles.slice())
    // }
    } 

    function Particle(x, y, size, xSpeed, ySpeed){
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.show = function(){
        sk.fill('rgb(39,106,251)');
        sk.ellipse(this.x, this.y, this.size, this.size);
    }
    this.update = function(){
        if(this.x>sk.width || this.x<0){
        this.xSpeed*=-1;
        }
        if(this.y>sk.height || this.y<0){
        this.ySpeed*=-1;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.show()
    }

    this.connect = function(particles){
        for(let p of particles){
        const d = sk.dist(this.x, this.y,p.x,p.y);
        if(d<=130 && d>10){
            sk.strokeWeight((10/d));
            sk.stroke('rgb(39,106,251)');
            sk.line(this.x,this.y,p.x,p.y);
        }
        }
    }
    }
}

export default sketch;