from django.shortcuts import render
from django.contrib.auth.models import  auth
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Shipping
from .forms import ShippingForm
from django.db.models import Q
from .forms import UserForm
# Create your views here.



def home(request):

    
    return render(request, 'home.html')

def about_us(request):

    
    return render(request, 'about-us.html')

def contact_us(request):

    
    return render(request, 'contact-us.html')



def signin(request):
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']

            user = auth.authenticate(username = username, password= password)

            if user is not None:
                auth.login(request,user)
                return redirect('dashboard')
            else:
                messages.info(request, 'Enter a valid User ID')
                return redirect('signin')
        return render(request, 'login.html')

def register(request):
    form = UserForm()
    if request.method =="POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "You have registered successfully")
            return redirect('signin')
        else:
            messages.error(request, 'Password not secure') 
            return redirect('register')
    else:
        context = {'form':form}
        
    return render(request, 'register.html', context )

@login_required(login_url='signin')
def dashboard(request):
    
    total_orders = Shipping.objects.filter(user=request.user).count()
    

    order_historys = Shipping.objects.filter(user=request.user).order_by('-pickup_date')
    print(order_historys)
    

    return render(request, 'dashboard.html', {'total_orders': total_orders, 'order_historys': order_historys})

@login_required(login_url='signin')
def create_shipping(request):

    form_name = ShippingForm()
    if request.method == 'POST':
        form_name = ShippingForm(request.POST)
    if form_name.is_valid():
            shipping_form = form_name.save(commit=False)
            shipping_form.user = request.user
            shipping_form.save()
            form_name = ShippingForm()
            return redirect('dashboard')
            

    
    return render(request, 'create-shipment.html', {'form_name': form_name} )




def shipping_details(request):
    if request.method == 'GET':
        query = request.GET.get('q')

        if query:
            results = Shipping.objects.filter(Q(tracking_number__icontains=query))
        else:
            results = Shipping.objects.none()

        context = {
            'query': query,
            'results': results,
        }

        return render(request, 'shipping-details.html', context)
    else:
        return render(request, 'shipping-details.html')





        

def logout(request):
    auth.logout(request)
    return redirect('signin')