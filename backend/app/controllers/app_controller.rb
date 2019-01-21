class AppController < ApplicationController
    if Rails.env.production?
        def show
            render file:'public/app.html'
        end
    else
        include ReverseProxy::Controller
        def show
            reverse_proxy "http://localhost:8080"
        end
    end
end
